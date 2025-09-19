import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  generateDonorsReport(donors: any[]): void {
    console.log('Iniciando geração de relatório de doadores...', donors);
    try {
      const doc = new jsPDF();
    
    // Título
    doc.setFontSize(20);
    doc.text('Relatório de Doadores', 20, 20);
    
    // Data de geração
    doc.setFontSize(12);
    doc.text(`Gerado em: ${new Date().toLocaleDateString('pt-BR')}`, 20, 35);
    
    // Preparar dados para a tabela
    const tableData = donors.map(donor => [
      donor.id,
      donor.name,
      donor.email,
      donor.phone || 'N/A',
      donor.address || 'N/A',
      donor.registrationDate ? 
        new Date(donor.registrationDate).toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit', 
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }) : 'N/A'
    ]);
    
    // Gerar tabela
    autoTable(doc, {
      head: [['ID', 'Nome', 'Email', 'Telefone', 'Endereço', 'Data e Hora de Cadastro']],
      body: tableData,
      startY: 50,
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      headStyles: {
        fillColor: [52, 58, 64],
        textColor: 255
      },
      alternateRowStyles: {
        fillColor: [248, 249, 250]
      }
    });
    
      // Salvar o PDF
      doc.save('relatorio-doadores.pdf');
      console.log('Relatório de doadores gerado com sucesso!');
    } catch (error) {
      console.error('Erro ao gerar relatório de doadores:', error);
      throw error;
    }
  }

  generateDonationsReport(donations: any[]): void {
    console.log('Iniciando geração de relatório de doações...', donations);
    try {
      const doc = new jsPDF();
    
    // Título
    doc.setFontSize(20);
    doc.text('Relatório de Doações', 20, 20);
    
    // Data de geração
    doc.setFontSize(12);
    doc.text(`Gerado em: ${new Date().toLocaleDateString('pt-BR')}`, 20, 35);
    
    // Calcular estatísticas
    const totalDonations = donations.length;
    const totalMoney = donations
      .filter(d => d.type === 'MONEY')
      .reduce((sum, d) => sum + (d.amount || 0), 0);
    const totalItems = donations.filter(d => d.type === 'ITEM').length;
    
    // Estatísticas
    doc.setFontSize(14);
    doc.text('Resumo:', 20, 50);
    doc.setFontSize(12);
    doc.text(`Total de doações: ${totalDonations}`, 20, 65);
    doc.text(`Valor total em dinheiro: R$ ${totalMoney.toFixed(2)}`, 20, 75);
    doc.text(`Total de itens doados: ${totalItems}`, 20, 85);
    
    // Preparar dados para a tabela
    const tableData = donations.map(donation => [
      donation.id,
      donation.donorName,
      donation.type === 'MONEY' ? 'Dinheiro' : 'Item',
      donation.type === 'MONEY' 
        ? `R$ ${donation.amount?.toFixed(2) || '0.00'}` 
        : donation.itemDescription || 'N/A',
      donation.type === 'ITEM' 
        ? `${donation.itemQuantity || 0} ${donation.unit || ''}` 
        : 'N/A',
      new Date(donation.donationDate).toLocaleDateString('pt-BR'),
      donation.observations || 'N/A'
    ]);
    
    // Gerar tabela
    autoTable(doc, {
      head: [['ID', 'Doador', 'Tipo', 'Valor/Descrição', 'Quantidade', 'Data', 'Observações']],
      body: tableData,
      startY: 100,
      styles: {
        fontSize: 9,
        cellPadding: 2
      },
      headStyles: {
        fillColor: [52, 58, 64],
        textColor: 255
      },
      alternateRowStyles: {
        fillColor: [248, 249, 250]
      },
      columnStyles: {
        6: { cellWidth: 30 } // Observações com largura menor
      }
    });
    
      // Salvar o PDF
      doc.save('relatorio-doacoes.pdf');
      console.log('Relatório de doações gerado com sucesso!');
    } catch (error) {
      console.error('Erro ao gerar relatório de doações:', error);
      throw error;
    }
  }

  generateCombinedReport(donors: any[], donations: any[]): void {
    console.log('Iniciando geração de relatório completo...', { donors, donations });
    try {
      const doc = new jsPDF();
    
    // Título
    doc.setFontSize(20);
    doc.text('Relatório Completo - Doadores e Doações', 20, 20);
    
    // Data de geração
    doc.setFontSize(12);
    doc.text(`Gerado em: ${new Date().toLocaleDateString('pt-BR')}`, 20, 35);
    
    // Estatísticas gerais
    const totalDonations = donations.length;
    const totalMoney = donations
      .filter(d => d.type === 'MONEY')
      .reduce((sum, d) => sum + (d.amount || 0), 0);
    const totalItems = donations.filter(d => d.type === 'ITEM').length;
    
    doc.setFontSize(14);
    doc.text('Resumo Geral:', 20, 50);
    doc.setFontSize(12);
    doc.text(`Total de doadores: ${donors.length}`, 20, 65);
    doc.text(`Total de doações: ${totalDonations}`, 20, 75);
    doc.text(`Valor total em dinheiro: R$ ${totalMoney.toFixed(2)}`, 20, 85);
    doc.text(`Total de itens doados: ${totalItems}`, 20, 95);
    
    // Tabela de doadores
    doc.setFontSize(14);
    doc.text('Doadores:', 20, 115);
    
    const donorsTableData = donors.map(donor => [
      donor.id,
      donor.name,
      donor.email,
      new Date(donor.registrationDate).toLocaleDateString('pt-BR')
    ]);
    
    autoTable(doc, {
      head: [['ID', 'Nome', 'Email', 'Data de Cadastro']],
      body: donorsTableData,
      startY: 125,
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      headStyles: {
        fillColor: [52, 58, 64],
        textColor: 255
      },
      alternateRowStyles: {
        fillColor: [248, 249, 250]
      }
    });
    
    // Nova página para doações
    doc.addPage();
    
    // Título da segunda página
    doc.setFontSize(14);
    doc.text('Doações:', 20, 20);
    
    // Tabela de doações
    const donationsTableData = donations.map(donation => [
      donation.id,
      donation.donorName,
      donation.type === 'MONEY' ? 'Dinheiro' : 'Item',
      donation.type === 'MONEY' 
        ? `R$ ${donation.amount?.toFixed(2) || '0.00'}` 
        : donation.itemDescription || 'N/A',
      new Date(donation.donationDate).toLocaleDateString('pt-BR')
    ]);
    
    autoTable(doc, {
      head: [['ID', 'Doador', 'Tipo', 'Valor/Descrição', 'Data']],
      body: donationsTableData,
      startY: 30,
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      headStyles: {
        fillColor: [52, 58, 64],
        textColor: 255
      },
      alternateRowStyles: {
        fillColor: [248, 249, 250]
      }
    });
    
      // Salvar o PDF
      doc.save('relatorio-completo.pdf');
      console.log('Relatório completo gerado com sucesso!');
    } catch (error) {
      console.error('Erro ao gerar relatório completo:', error);
      throw error;
    }
  }
}
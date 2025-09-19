export enum DonationType {
  MONEY = 'MONEY',
  ITEM = 'ITEM'
}

export interface DonationRequest {
  donorId: number;
  type: DonationType;
  amount?: number;
  itemDescription?: string;
  itemQuantity?: number;
  unit?: string;
  observations?: string;
  donationDate: string;
}

export interface DonationResponse {
  id: number;
  donorId: number;
  donorName: string;
  type: DonationType;
  amount?: number;
  itemDescription?: string;
  itemQuantity?: number;
  unit?: string;
  observations?: string;
  donationDate: string;
}
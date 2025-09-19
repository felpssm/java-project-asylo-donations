export interface DonorRequest {
  type: string;
  name: string;
  document: string | null;
  email: string;
  phone: string;
  address?: string;
}

export interface DonorResponse {
  id: number;
  type: string;
  name: string;
  document: string;
  email: string;
  phone: string;
  address?: string;
  registrationDate?: string;
}
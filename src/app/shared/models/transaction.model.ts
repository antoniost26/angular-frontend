export interface Transaction {
  id: number;
  id_masina: string;
  id_client_card?: string;
  suma_piese: number;
  suma_manopera: number;
  data_si_ora: string;
  suma_piese_plata: number;
  suma_manopera_plata: number;
  reducere_manopera: number;
  reducere_piese: number;
  reducere_totala: number;
}

export interface TransactionDateRange {
  after: string;
  before: string;
}

export interface TransactionSumRange {
  start: number;
  end: number;
}

export default interface Bill {
  id?: number;
  type: string;
  title: string;
  description: string;
  value: number;
  created: Date;
}

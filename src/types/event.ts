export interface Event {
  id?: string;  // Making it optional to maintain compatibility with existing code
  date: string;
  title: string;
  description: string;
  media_url?: string;
  media_type?: string;
  content?: string;
}
export interface Event {
  id: string;
  date: string;
  title: string;
  description: string;
  media_url?: string;
  media_type?: 'image' | 'video';
  content?: string;
}
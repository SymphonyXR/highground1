export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      community_shoutouts: {
        Row: {
          achievement: string
          created_at: string
          id: string
          member_name: string
          photo_url: string | null
        }
        Insert: {
          achievement: string
          created_at?: string
          id?: string
          member_name: string
          photo_url?: string | null
        }
        Update: {
          achievement?: string
          created_at?: string
          id?: string
          member_name?: string
          photo_url?: string | null
        }
        Relationships: []
      }
      elevate_challenges: {
        Row: {
          created_at: string
          description: string
          id: string
          prize_description: string
          status: string
          submission_deadline: string | null
          title: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          prize_description: string
          status: string
          submission_deadline?: string | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          prize_description?: string
          status?: string
          submission_deadline?: string | null
          title?: string
        }
        Relationships: []
      }
      elevate_community_projects: {
        Row: {
          created_at: string
          description: string
          id: string
          media_url: string | null
          project_type: string
          status: string
          title: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          media_url?: string | null
          project_type: string
          status: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          media_url?: string | null
          project_type?: string
          status?: string
          title?: string
        }
        Relationships: []
      }
      elevate_content_series: {
        Row: {
          created_at: string
          creator_name: string
          description: string
          id: string
          media_type: string | null
          media_url: string | null
          title: string
        }
        Insert: {
          created_at?: string
          creator_name: string
          description: string
          id?: string
          media_type?: string | null
          media_url?: string | null
          title: string
        }
        Update: {
          created_at?: string
          creator_name?: string
          description?: string
          id?: string
          media_type?: string | null
          media_url?: string | null
          title?: string
        }
        Relationships: []
      }
      elevate_programs: {
        Row: {
          capacity: number | null
          created_at: string
          description: string
          end_date: string | null
          id: string
          program_type: string
          start_date: string | null
          title: string
        }
        Insert: {
          capacity?: number | null
          created_at?: string
          description: string
          end_date?: string | null
          id?: string
          program_type: string
          start_date?: string | null
          title: string
        }
        Update: {
          capacity?: number | null
          created_at?: string
          description?: string
          end_date?: string | null
          id?: string
          program_type?: string
          start_date?: string | null
          title?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          content: string | null
          created_at: string
          date: string
          description: string
          id: string
          media_type: string | null
          media_url: string | null
          title: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          date: string
          description: string
          id?: string
          media_type?: string | null
          media_url?: string | null
          title: string
        }
        Update: {
          content?: string | null
          created_at?: string
          date?: string
          description?: string
          id?: string
          media_type?: string | null
          media_url?: string | null
          title?: string
        }
        Relationships: []
      }
      guides_tips: {
        Row: {
          category: string
          content: string
          created_at: string
          id: string
          title: string
        }
        Insert: {
          category: string
          content: string
          created_at?: string
          id?: string
          title: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          id?: string
          title?: string
        }
        Relationships: []
      }
      mood_board: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string
          type: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url: string
          type: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string
          type?: string
        }
        Relationships: []
      }
      playlists: {
        Row: {
          created_at: string
          id: string
          playlist_url: string
          theme: string
          thumbnail_url: string | null
          title: string
        }
        Insert: {
          created_at?: string
          id?: string
          playlist_url: string
          theme: string
          thumbnail_url?: string | null
          title: string
        }
        Update: {
          created_at?: string
          id?: string
          playlist_url?: string
          theme?: string
          thumbnail_url?: string | null
          title?: string
        }
        Relationships: []
      }
      quotes: {
        Row: {
          author: string | null
          category: string
          content: string
          created_at: string
          id: string
        }
        Insert: {
          author?: string | null
          category: string
          content: string
          created_at?: string
          id?: string
        }
        Update: {
          author?: string | null
          category?: string
          content?: string
          created_at?: string
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

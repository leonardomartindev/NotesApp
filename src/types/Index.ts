// src/types/index.ts

export interface Note {
  id: string; // identificador único
  title: string | "Titulo"; // título da nota
  description: string; // descrição breve da nota
  content: string; // conteúdo da nota
  tags: string[]; // lista de tags
  category: string; // categoria da nota
  createdAt: Date; // data de criação
  updatedAt: Date; // data de última atualização
  favorite: boolean,
  archived: boolean; // se a nota está arquivada
  deleted: boolean; // se a nota está na lixeira
  deletedAt?: Date; // data em que a nota foi excluída
}

export interface NotesState {
  notes: Note[];
  favoriteNotes: [],
  archivedNotes: Note[];
  trash: Note[];
}

export type NotesAction = 
  | { type: 'ADD_NOTE'; payload: Note }
  | { type: 'UPDATE_NOTE'; payload: Note }
  | { type: 'FAVORITE_NOTE'; payload: Note }
  | { type: 'ARCHIVE_NOTE'; payload: string }
  | { type: 'DELETE_NOTE'; payload: string }
  | { type: 'RESTORE_NOTE'; payload: string }
  | { type: 'EMPTY_TRASH' };

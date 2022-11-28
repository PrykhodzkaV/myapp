export type Track = {
  id: string;
  thumbnail: string;
  topic: string;
  authorId: string;
  title: string;
  description: string;
  numberOfViews: number;
  numberOfLikes: number;
  createdAt: string;
  length: number;
  modulesCount: number;
  modules: [string];
};

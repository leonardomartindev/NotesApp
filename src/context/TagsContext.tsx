import React, { createContext, useState, useEffect } from "react";

interface TagsProviderProps {
  children: React.ReactNode;
}

interface TagsContextType {
  tags: string[];
  addTag: (tag: string) => void;
  deleteTag: (tag: string) => void;
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}

export const TagsContext = createContext<TagsContextType>({
  tags: [],
  addTag: () => {},
  deleteTag: () => {},
  setTags: () => {},
});

export const TagsProvider: React.FC<TagsProviderProps> = ({ children }) => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const savedTags = localStorage.getItem("tags");
    if (savedTags) {
      setTags(JSON.parse(savedTags));
    }
  }, []);

  const addTag = (tag: string) => {
    const updatedTags = [...tags, tag];
    setTags(updatedTags);
    localStorage.setItem("tags", JSON.stringify(updatedTags));
  };

  const deleteTag = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
    localStorage.setItem("tags", JSON.stringify(updatedTags));
  };

  return (
    <TagsContext.Provider value={{ tags, addTag, deleteTag, setTags }}>
      {children}
    </TagsContext.Provider>
  );
};

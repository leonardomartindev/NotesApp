import React, { createContext, useState, useEffect } from "react";

interface CategoryProviderProps {
  children: React.ReactNode;
}

interface CategoryContextType {
  categories: string[];
  addCategory: (cateogry: string) => void;
  deleteCategory: (cateogry: string) => void;
  setCategories: React.Dispatch<React.SetStateAction<string[]>>

}

export const CategoriesContext = createContext<CategoryContextType>({
  categories: [],
  addCategory: () => {},
  deleteCategory: () => {},
  setCategories: () => {},
});

export const CategoriesProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const [categories, setCategories] = useState<string[]>(["Pessoal", "trabalho"]);

  useEffect(() => {
    const savedCategories = localStorage.getItem("categories");
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
  }, []);

  const addCategory = (category: string) => {
    const updatedCategories = [...categories, category];
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  const deleteCategory = (category: string) => {
    const updatedCategories = categories.filter((c) => c !== category);
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  return (
    <CategoriesContext.Provider value={{ categories, addCategory, deleteCategory, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

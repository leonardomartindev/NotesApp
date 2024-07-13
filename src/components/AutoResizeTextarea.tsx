import React, { useEffect, useRef } from "react";
import { PageContent } from "../Pages/Pages.style";

interface AutoResizeTextareaProps {
  content: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  editable: boolean;
}

const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = ({ content, onChange, editable }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; 
      textarea.style.height = textarea.scrollHeight + "px"; 
    }
  }, [content]);

  return (
    <PageContent
      placeholder="Escreva aqui sua nova nota!"
      ref={textareaRef}
      value={content}
      onChange={onChange}
      rows={1} 
      disabled={!editable}
    />
  );
};

export default AutoResizeTextarea;

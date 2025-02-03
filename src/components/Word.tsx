import Header from "./Header";
import Textarea from "./Textarea";
import Toolbar from "./Toolbar";

interface WordProps {
  theme: "light" | "dark" | "system";
  toolbarAction: string;
}

const Word: React.FC<WordProps> = ({ theme, toolbarAction }) => {
  return (
    <div className="w-full max-w-3xl rounded">
      <Header theme={theme} />
      <Toolbar theme={theme} toolbarAction={toolbarAction} />
      <Textarea theme={theme} />
    </div>
  );
};

export default Word;

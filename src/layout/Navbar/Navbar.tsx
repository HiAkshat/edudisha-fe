import ThemeToggle from "@/components/atoms/ThemeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center gap-2 bg-background apply-shadow rounded-md p-2 px-4">
      <span className="font-bold">Some Tab Name</span>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
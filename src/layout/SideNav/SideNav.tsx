import FileIcon from "@/components/atoms/icons/FileIcon";
import {
  Sidebar,
  SidebarMenuItem,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarMenuSubButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useTheme } from "@/components/theme-provider";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
export default function SideNav({
  items,
  setIsSidebarHovered,
}: {
  items: any[];
  setIsSidebarHovered: (isHovered: boolean) => void;
}) {
  const { appliedTheme } = useTheme();

  return (
    <div className="">
      <Sidebar
        collapsible="icon"
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <Collapsible
                    defaultOpen={false}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem key={item.title}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            {/* <item.icon /> */}
                            <FileIcon
                              width={20}
                              height={20}
                              fillPath={
                                appliedTheme === "dark" ? "white" : "black"
                              }
                            />
                            <div className="flex justify-between w-full">
                              <span>{item.title}</span>
                              <ChevronDown className={`ml-2 h-4 w-4`} />
                            </div>
                          </a>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              <span>{item.title} 1</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              <span>{item.title} 2</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}

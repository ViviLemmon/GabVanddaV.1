import React from "react";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  Users2Icon,
  UserPlusIcon,
  CalendarIcon,
  FileTextIcon,
  Settings2Icon,
  NewspaperIcon,
  GraduationCapIcon,
  BarChart3Icon,
  ListTodoIcon,
  WalletIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarProps {
  className?: string;
  items?: {
    title: string;
    icon: React.ReactNode;
    href: string;
    isActive?: boolean;
  }[];
  userProfile?: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
}

const Sidebar = ({
  className,
  items = [
    {
      title: "Dashboard",
      icon: <HomeIcon className="w-5 h-5" />,
      href: "/",
      isActive: true,
    },
    {
      title: "Gabinete",
      icon: <Users2Icon className="w-5 h-5" />,
      href: "/team",
    },
    {
      title: "Cadastro de Cidadãos",
      icon: <UserPlusIcon className="w-5 h-5" />,
      href: "/recruitment",
    },
    {
      title: "Agenda Parlamentar",
      icon: <CalendarIcon className="w-5 h-5" />,
      href: "/schedule",
    },
    {
      title: "Propostas de Vereança",
      icon: <FileTextIcon className="w-5 h-5" />,
      href: "/documents",
    },
    {
      title: "Blog",
      icon: <NewspaperIcon className="w-5 h-5" />,
      href: "/blog",
    },
    {
      title: "Central de Formação Cidadã",
      icon: <GraduationCapIcon className="w-5 h-5" />,
      href: "/citizen-training",
    },
    {
      title: "Gestão de Atuação Parlamentar",
      icon: <BarChart3Icon className="w-5 h-5" />,
      href: "/parliamentary-management",
    },
    {
      title: "Gestão de Controle de Demandas",
      icon: <ListTodoIcon className="w-5 h-5" />,
      href: "/demand-control",
    },
    {
      title: "Gestão de Verbas Parlamentares",
      icon: <WalletIcon className="w-5 h-5" />,
      href: "/budget-management",
    },
  ],
  userProfile = {
    name: "Ana Silva",
    role: "Coordenadora",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
  },
}: SidebarProps) => {
  return (
    <div
      className={cn(
        "flex flex-col h-full w-[280px] bg-white border-r",
        className,
      )}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary">
          Sistema de Gestão Parlamentar Diego Alvarez
        </h2>
      </div>

      <ScrollArea className="flex-1 px-4">
        <nav className="flex flex-col gap-2">
          {items.map((item, index) => (
            <Button
              key={index}
              variant={item.isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                item.isActive && "bg-secondary",
              )}
              asChild
            >
              <a href={item.href}>
                {item.icon}
                {item.title}
              </a>
            </Button>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-6 border-t">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={userProfile.avatarUrl} />
            <AvatarFallback>{userProfile.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">{userProfile.name}</p>
            <p className="text-xs text-muted-foreground">{userProfile.role}</p>
          </div>
          <Button variant="ghost" size="icon">
            <Settings2Icon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

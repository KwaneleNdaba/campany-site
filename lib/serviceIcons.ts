import {
  Building2,
  Building,
  Briefcase,
  Factory,
  Home,
  Store,
  Leaf,
  Sun,
  Droplets,
  Recycle,
  Lightbulb,
  PenTool,
  HardHat,
  Key,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export const SERVICE_ICON_NAMES = [
  "Building2",
  "Home",
  "Factory",
  "Store",
  "Building",
  "Briefcase",
  "Leaf",
  "Sun",
  "Droplets",
  "Recycle",
  "Lightbulb",
  "PenTool",
  "HardHat",
  "Key",
  "MapPin",
] as const;

export type ServiceIconName = (typeof SERVICE_ICON_NAMES)[number];

const iconMap: Record<ServiceIconName, LucideIcon> = {
  Building2,
  Home,
  Factory,
  Store,
  Building,
  Briefcase,
  Leaf,
  Sun,
  Droplets,
  Recycle,
  Lightbulb,
  PenTool,
  HardHat,
  Key,
  MapPin,
};

export function getServiceIcon(name: string): LucideIcon {
  if (name in iconMap) {
    return iconMap[name as ServiceIconName];
  }
  return Building2;
}

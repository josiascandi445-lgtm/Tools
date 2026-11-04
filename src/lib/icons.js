import {
  Film, Layers, Package, BookOpen, Terminal, Sparkles, LayoutTemplate,
  Table2, FileText, GraduationCap, SlidersHorizontal, Briefcase, Braces, Palette,
} from 'lucide-react';

const map = {
  Film, Layers, Package, BookOpen, Terminal, Sparkles, LayoutTemplate,
  Table2, FileText, GraduationCap, SlidersHorizontal, Briefcase, Braces, Palette,
};

export function getIcon(name) {
  return map[name] ?? Package;
}

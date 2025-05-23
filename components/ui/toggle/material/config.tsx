import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

// Sample data for rendering ToggleButtonGroup with nonexclusive selections
export const nonExclusiveSampleData = [
  { value: 'bold', label: 'Bold', icon: <FormatBoldIcon /> },
  { value: 'italic', label: 'Italic', icon: <FormatItalicIcon /> },
  { value: 'underlined', label: 'Underlined', icon: <FormatUnderlinedIcon /> },
  { value: 'color', label: 'Color Fill', icon: <FormatColorFillIcon />, disabled: true }
];

// Sample data for rendering ToggleButtonGroup with exclusive selections
export const exclusiveSampleData = [
  { value: 'left', label: 'Left', icon: <FormatAlignLeftIcon /> },
  { value: 'center', label: 'Center', icon: <FormatAlignCenterIcon /> },
  { value: 'right', label: 'Right', icon: <FormatAlignRightIcon /> },
  { value: 'justify', label: 'Justify', icon: <FormatAlignJustifyIcon />, disabled: true }
];

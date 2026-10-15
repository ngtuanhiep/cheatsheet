import type { Tool } from "../../types";
import { yaziTool } from "./yazi";
import { nvimTool } from "./nvim";
import { lazyvimTool } from "./lazyvim";
import { tmuxTool } from "./tmux";
import { tuiosTool } from "./tuios";
import { rgTool } from "./rg";
import { fdTool } from "./fd";
import { dustTool } from "./dust";
import { fzfTool } from "./fzf";
import { zoxideTool } from "./zoxide";
import { batTool } from "./bat";
import { curlTool } from "./curl";
import { brewTool } from "./brew";
import { wgetTool } from "./wget";
import { ffmpegTool } from "./ffmpeg";
import { ytdlpTool } from "./ytdlp";
import { ghTool } from "./gh";
import { hfTool } from "./hf";
import { starshipTool } from "./starship";
import { htopTool } from "./htop";
import { shellDiagnosticsTool } from "./shell-diagnostics";
import { macosTool } from "./macos";
import { ubuntuTool } from "./ubuntu";
import { itermTool } from "./iterm";
import { combosTool } from "./combos";

// new:tool imports — do not remove this marker

export const allTools: Tool[] = [
  yaziTool,
  nvimTool,
  lazyvimTool,
  tmuxTool,
  tuiosTool,
  rgTool,
  fdTool,
  dustTool,
  fzfTool,
  zoxideTool,
  batTool,
  curlTool,
  brewTool,
  wgetTool,
  ffmpegTool,
  ytdlpTool,
  ghTool,
  hfTool,
  starshipTool,
  htopTool,
  shellDiagnosticsTool,
  macosTool,
  ubuntuTool,
  itermTool,
  combosTool,
  // new:tool entries — do not remove this marker
];

import type { ComponentChildren } from "preact";

const namedKeys = new Set([
  "enter", "esc", "escape", "tab", "space", "backspace", "delete", "home", "end",
  "pgup", "pgdn", "leader", "prefix", "cmd", "ctrl", "alt", "opt", "shift",
]);

const labels: Record<string, string> = {
  "⌘": "Cmd",
  "⌥": "Opt",
  "⇧": "Shift",
  "←": "←",
  "→": "→",
  "↑": "↑",
  "↓": "↓",
};

function splitChord(token: string): string[] {
  if (token === "+") return ["+"];
  const symbolic = token.match(/^(⌘)?(⌥)?(⇧)?(.+)$/u);
  if (symbolic && (symbolic[1] || symbolic[2] || symbolic[3])) {
    return [...symbolic.slice(1, 4).filter(Boolean), symbolic[4]!].map((part) => labels[part] ?? part);
  }
  return token.split("+").filter(Boolean).map((part) => labels[part] ?? part);
}

function tokenParts(token: string): string[] {
  const pieces = token.match(/<[^>]+>|[^<]+/g) ?? [token];
  return pieces.flatMap((piece) => {
    if (piece.startsWith("<") && piece.endsWith(">")) return [piece];
    if (/^[a-zA-Z]{2,4}$/.test(piece) && !namedKeys.has(piece.toLowerCase())) return piece.split("");
    return [piece];
  });
}

function keyLabel(part: string): string {
  const clean = part.replace(/^<|>$/g, "");
  const namedLabels: Record<string, string> = { leader: "Leader", space: "Space", tab: "Tab", cr: "Enter" };
  return namedLabels[clean.toLowerCase()] ?? clean;
}

function Key({ children }: { children: ComponentChildren }) {
  return <kbd class="keycap">{children}</kbd>;
}

function Chord({ token }: { token: string }) {
  const parts = splitChord(token);
  return (
    <span class="key-chord">
      {parts.map((part, index) => (
        <span class="key-part" key={`${part}-${index}`}>
          {index > 0 && <span class="key-plus" aria-hidden="true">+</span>}
          <Key>{keyLabel(part)}</Key>
        </span>
      ))}
    </span>
  );
}

export function Shortcut({ value }: { value: string }) {
  const tokens = value.trim().split(/\s+/);
  let previousNeedsContinuation = false;

  return (
    <span class="shortcut" aria-label={value}>
      {tokens.map((token, tokenIndex) => {
        if (token === "/") {
          previousNeedsContinuation = false;
          return <span class="key-or" key={tokenIndex}>hoặc</span>;
        }
        if (token === "→") {
          previousNeedsContinuation = false;
          return <span class="key-then" aria-hidden="true" key={tokenIndex}>→</span>;
        }

        const alternatives = token.endsWith("/") ? [token] : token.split("/");
        const prefix = previousNeedsContinuation ? <span class="key-then" aria-hidden="true">→</span> : null;
        previousNeedsContinuation = alternatives.length === 1 && /(?:\+|⌘|⌥|⇧|^<leader>|^prefix$)/i.test(alternatives[0]!);
        return (
          <span class="key-token" key={`${token}-${tokenIndex}`}>
            {prefix}
            {alternatives.map((alternative, alternativeIndex) => (
              <span class="key-alternative" key={`${alternative}-${alternativeIndex}`}>
                {alternativeIndex > 0 && <span class="key-or">hoặc</span>}
                {tokenParts(alternative).map((part, partIndex) => (
                  <span class="key-sequence" key={`${part}-${partIndex}`}>
                    {partIndex > 0 && <span class="key-then" aria-hidden="true">→</span>}
                    <Chord token={part} />
                  </span>
                ))}
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
}

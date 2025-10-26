import type React from "react"

interface SmartSimpleBrilliantProps {
  /** Fixed width from Figma: 482px */
  width?: number | string
  /** Fixed height from Figma: 300px */
  height?: number | string
  /** Optional className to pass to root */
  className?: string
  /** Theme palette */
  theme?: "light" | "dark"
}

/**
 * Smart · Simple · Brilliant – ElevenLabs cards
 */
const SmartSimpleBrilliant: React.FC<SmartSimpleBrilliantProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "dark",
}) => {
  const themeVars: React.CSSProperties =
    theme === "light"
      ? {
          "--ssb-surface": "transparent",
          "--ssb-card-bg": "#ffffff",
          "--ssb-card-text": "#0f172a",
          "--ssb-card-muted": "rgba(15,23,42,0.7)",
          "--ssb-card-border": "rgba(15,23,42,0.12)",
          "--ssb-badge-bg": "rgba(14,165,233,0.15)",
          "--ssb-badge-text": "#0ea5e9",
          "--ssb-code-bg": "#f4f4ff",
          "--ssb-code-border": "rgba(99,102,241,0.35)",
          "--ssb-shadow": "0px 12px 30px rgba(15,23,42,0.18)",
        }
      : {
          "--ssb-surface": "transparent",
          "--ssb-card-bg": "#161b22",
          "--ssb-card-text": "#f8fafc",
          "--ssb-card-muted": "rgba(248,250,252,0.75)",
          "--ssb-card-border": "rgba(248,250,252,0.14)",
          "--ssb-badge-bg": "rgba(59,130,246,0.18)",
          "--ssb-badge-text": "#bfdbfe",
          "--ssb-code-bg": "rgba(15,23,42,0.65)",
          "--ssb-code-border": "rgba(148,163,184,0.35)",
          "--ssb-shadow": "0px 12px 30px rgba(0,0,0,0.45)",
        }

  const fontStack = "Inter, 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
  const monoFont = "JetBrains Mono, 'SFMono-Regular', Menlo, Consolas, monospace"

  const primaryWaveform = [0.25, 0.55, 0.38, 0.7, 0.9, 0.64, 0.44, 0.82, 0.56, 0.36, 0.42, 0.78, 0.66, 0.35, 0.5, 0.82, 0.94, 0.62, 0.4, 0.58, 0.72, 0.52, 0.44, 0.68]
  const secondaryWaveform = [0.12, 0.22, 0.38, 0.52, 0.68, 0.82, 0.94, 0.68, 0.48, 0.3, 0.22, 0.18, 0.28, 0.46, 0.64, 0.84, 0.74, 0.58, 0.36, 0.24, 0.18, 0.32, 0.5, 0.72]
  const microphoneWaveform = [0.08, 0.16, 0.38, 0.6, 0.78, 0.68, 0.32, 0.14, 0.22, 0.4, 0.74, 0.9, 0.58, 0.3, 0.18, 0.42, 0.66, 0.82, 0.74, 0.5, 0.32, 0.2, 0.28, 0.44]

  const manualSteps = [
    "Copy and paste the ElevenLabs waveform source into components/ui/waveform.tsx.",
    "Update the import paths to match your project setup.",
  ]

  const apiHighlights = [
    { label: "Waveform", detail: "Base canvas renderer with barWidth, gap, fade, and onBarClick hooks." },
    { label: "ScrollingWaveform", detail: "Auto-generates bars with speed + barCount controls for motion." },
    { label: "MicrophoneWaveform", detail: "Real-time MediaDevices capture with sensitivity + FFT tuning." },
  ]

  const usageImport = `import {
  AudioScrubber,
  LiveMicrophoneWaveform,
  MicrophoneWaveform,
  RecordingWaveform,
  ScrollingWaveform,
  StaticWaveform,
  Waveform,
} from "@/components/ui/waveform"`

  const scrollingSnippet = `<ScrollingWaveform height={80} speed={50} barCount={60} fadeEdges />`
  const microphoneSnippet = `<MicrophoneWaveform active={isRecording} height={100} sensitivity={1.5} />`

  const previewBackground =
    theme === "light" ? "linear-gradient(120deg, #eef2ff, #e0f2fe)" : "linear-gradient(120deg, #1f2937, #0f172a)"
  const previewBorderColor = theme === "light" ? "rgba(15,23,42,0.12)" : "rgba(248,250,252,0.18)"

  const baseCardStyle: React.CSSProperties = {
    width: "222px",
    borderRadius: "18px",
    padding: "18px",
    background: "var(--ssb-card-bg)",
    border: "1px solid var(--ssb-card-border)",
    boxShadow: "var(--ssb-shadow)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    fontFamily: fontStack,
    color: "var(--ssb-card-text)",
  }

  const secondaryCardStyle: React.CSSProperties = {
    ...baseCardStyle,
    width: "208px",
    padding: "16px",
    gap: "10px",
  }

  const sectionLabelStyle: React.CSSProperties = {
    fontSize: "10px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--ssb-card-muted)",
    fontWeight: 600,
  }

  const badgeStyle: React.CSSProperties = {
    fontSize: "10px",
    fontWeight: 600,
    padding: "4px 8px",
    borderRadius: "999px",
    background: "var(--ssb-badge-bg)",
    color: "var(--ssb-badge-text)",
    textTransform: "capitalize",
  }

  const codeBlockStyle: React.CSSProperties = {
    margin: 0,
    background: "var(--ssb-code-bg)",
    border: "1px solid var(--ssb-code-border)",
    borderRadius: "8px",
    padding: "8px",
    fontFamily: monoFont,
    fontSize: "11px",
    color: "var(--ssb-card-text)",
    lineHeight: 1.4,
    overflowX: "auto",
    whiteSpace: "pre-wrap",
  }

  const renderWaveform = (
    data: number[],
    {
      color,
      height,
      barWidth = 3,
      gap = 2,
      fade = false,
      keyPrefix,
    }: { color: string; height: number; barWidth?: number; gap?: number; fade?: boolean; keyPrefix: string },
  ): React.ReactNode => (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: `${gap}px`,
        height,
        width: "100%",
      }}
    >
      {data.map((value, index) => (
        <div
          key={`${keyPrefix}-${index}`}
          style={{
            width: `${barWidth}px`,
            height: Math.max(4, value * height),
            borderRadius: "999px",
            background: color,
            opacity: fade ? 0.45 + (index / data.length) * 0.55 : 0.9,
          }}
        />
      ))}
    </div>
  )

  return (
    <div
      className={className}
      style={
        {
          width,
          height,
          position: "relative",
          background: "var(--ssb-surface)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="Two ElevenLabs waveform documentation cards"
    >
      <div
        style={{
          position: "relative",
          width: "340px",
          height: "240px",
          transform: "scale(1.12)",
        }}
      >
        {/* Primary card */}
        <div style={{ position: "absolute", left: "128px", top: "0px" }}>
          <div style={{ transform: "rotate(4deg)", transformOrigin: "center" }}>
            <div style={baseCardStyle}>
              <div style={{ ...sectionLabelStyle, display: "flex", justifyContent: "space-between" }}>
                <span>waveform</span>
                <span>component</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ fontSize: "18px", fontWeight: 600 }}>Waveform</div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    lineHeight: 1.5,
                    color: "var(--ssb-card-muted)",
                  }}
                >
                  Canvas-based audio waveform visualization with recording, playback scrubbing, and microphone input
                  support.
                </p>
              </div>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["featured", "component"].map((badge) => (
                  <span key={badge} style={badgeStyle}>
                    {badge}
                  </span>
                ))}
              </div>

              <div
                style={{
                  borderRadius: "14px",
                  border: `1px solid ${previewBorderColor}`,
                  padding: "12px",
                  background: previewBackground,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={sectionLabelStyle}>ComponentPreview</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ fontWeight: 600 }}>waveform-demo</div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      color: "var(--ssb-card-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    A live scrolling waveform visualization with smooth animations.
                  </p>
                </div>
                <div
                  style={{
                    borderRadius: "10px",
                    border: `1px dashed ${previewBorderColor}`,
                    padding: "10px",
                    background: theme === "light" ? "rgba(15,23,42,0.04)" : "rgba(255,255,255,0.04)",
                  }}
                >
                  {renderWaveform(primaryWaveform, {
                    color: theme === "light" ? "#2563eb" : "#93c5fd",
                    height: 62,
                    barWidth: 4,
                    gap: 2,
                    fade: true,
                    keyPrefix: "primary",
                  })}
                </div>
              </div>

              <div
                style={{
                  borderRadius: "12px",
                  border: "1px solid var(--ssb-card-border)",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={sectionLabelStyle}>Installation</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "8px" }}>
                  <div
                    style={{
                      borderRadius: "10px",
                      border: `1px dashed ${previewBorderColor}`,
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <span style={sectionLabelStyle}>CLI</span>
                    <pre style={codeBlockStyle}>
                      <code>npx @elevenlabs/cli@latest components add waveform</code>
                    </pre>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                      border: `1px dashed ${previewBorderColor}`,
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <span style={sectionLabelStyle}>Manual</span>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: "16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        fontSize: "11px",
                        color: "var(--ssb-card-muted)",
                      }}
                    >
                      {manualSteps.map((step, index) => (
                        <li key={`manual-${index}`}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div
                style={{
                  borderRadius: "12px",
                  border: "1px solid var(--ssb-card-border)",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={sectionLabelStyle}>Usage</div>
                <pre style={codeBlockStyle}>
                  <code>{usageImport}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary card */}
        <div style={{ position: "absolute", left: "0px", top: "28px" }}>
          <div style={{ transform: "rotate(-6deg)", transformOrigin: "center" }}>
            <div style={secondaryCardStyle}>
              <div style={{ ...sectionLabelStyle, display: "flex", justifyContent: "space-between" }}>
                <span>examples</span>
                <span>api</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ fontSize: "16px", fontWeight: 600 }}>Live audio workflows</div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "var(--ssb-card-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  Showcase different ElevenLabs waveform modes—scrolling playback and microphone input.
                </p>
              </div>

              <div
                style={{
                  borderRadius: "12px",
                  border: `1px solid ${previewBorderColor}`,
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  background: theme === "light" ? "rgba(14,165,233,0.08)" : "rgba(14,165,233,0.18)",
                }}
              >
                <div style={sectionLabelStyle}>Scrolling Animation</div>
                <div
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    background: theme === "light" ? "rgba(224,242,254,0.6)" : "rgba(15,23,42,0.55)",
                  }}
                >
                  {renderWaveform(secondaryWaveform, {
                    color: theme === "light" ? "#0ea5e9" : "#38bdf8",
                    height: 50,
                    barWidth: 3,
                    gap: 1.5,
                    fade: true,
                    keyPrefix: "scrolling",
                  })}
                </div>
                <pre style={codeBlockStyle}>
                  <code>{scrollingSnippet}</code>
                </pre>
              </div>

              <div
                style={{
                  borderRadius: "12px",
                  border: `1px solid ${previewBorderColor}`,
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  background: theme === "light" ? "rgba(244,114,182,0.08)" : "rgba(244,114,182,0.2)",
                }}
              >
                <div style={{ ...sectionLabelStyle, display: "flex", justifyContent: "space-between" }}>
                  <span>Microphone Input</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "10px" }}>
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#22c55e",
                        display: "inline-flex",
                      }}
                    />
                    listening
                  </span>
                </div>
                <div
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    background: theme === "light" ? "rgba(248,250,252,0.9)" : "rgba(15,23,42,0.55)",
                  }}
                >
                  {renderWaveform(microphoneWaveform, {
                    color: theme === "light" ? "#f472b6" : "#f9a8d4",
                    height: 52,
                    barWidth: 4,
                    gap: 2,
                    fade: false,
                    keyPrefix: "microphone",
                  })}
                </div>
                <pre style={codeBlockStyle}>
                  <code>{microphoneSnippet}</code>
                </pre>
              </div>

              <div
                style={{
                  borderRadius: "12px",
                  border: `1px dashed ${previewBorderColor}`,
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={sectionLabelStyle}>API highlights</div>
                {apiHighlights.map((item) => (
                  <div key={item.label} style={{ fontSize: "11px", color: "var(--ssb-card-muted)", lineHeight: 1.4 }}>
                    <span style={{ fontWeight: 600, color: "var(--ssb-card-text)" }}>{item.label}</span> —{" "}
                    <span>{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartSimpleBrilliant

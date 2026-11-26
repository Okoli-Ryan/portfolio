import type { ReactNode } from 'react';
import type { Art } from '@/content/types';

/*
  Drawn, animated stand-ins for project screenshots. Colours and keyframes live in styles/site.css
  (.il-*), where the pause button and reduced motion switch them off. Each plays once, on view. `--i` staggers repeated parts.
*/

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

interface BoxProps {
  readonly x: number;
  readonly y: number;
  readonly w: number;
  readonly h: number;
  readonly tone?: 'panel' | 'line' | 'soft' | 'accent';
  readonly r?: number;
  readonly anim?: 'rise' | 'pulse' | 'grow' | 'fill' | 'type' | 'blink';
  readonly i?: number;
}

function Box({ x, y, w, h, tone = 'panel', r = 14, anim, i = 0 }: BoxProps) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={r}
      className={anim ? `il-${tone} il-a il-${anim}` : `il-${tone}`}
      style={anim ? { animationDelay: `${(i * 0.18).toFixed(2)}s` } : undefined}
    />
  );
}

const scenes: Record<Art, () => ReactNode> = {
  video: () => (
    <>
      <Box x={130} y={180} w={960} h={560} />
      <path d="M575 410v100l90-50z" className="il-accent il-a il-pulse" />
      <Box x={130} y={780} w={960} h={14} tone="line" r={7} />
      <Box x={130} y={780} w={960} h={14} tone="accent" r={7} anim="fill" />
      <Box x={1130} y={180} w={340} h={690} />
      {range(6).map((i) => (
        <Box key={i} x={1160 + (i % 2) * 40} y={220 + i * 90} w={240} h={56} tone={i % 2 ? 'soft' : 'line'} anim="rise" i={i} />
      ))}
    </>
  ),
  rooms: () => (
    <>
      {range(6).map((i) => {
        const x = 130 + (i % 3) * 450;
        const y = 180 + Math.floor(i / 3) * 350;
        return (
          <g key={i}>
            <Box x={x} y={y} w={420} h={320} />
            <Box x={x + 30} y={y + 30} w={360} h={180} tone="line" anim="blink" i={i * 2} />
            <Box x={x + 30} y={y + 240} w={220} h={20} tone={i === 0 ? 'accent' : 'soft'} r={8} />
          </g>
        );
      })}
    </>
  ),
  chat: () => (
    <>
      {range(6).map((i) => (
        <Box key={i} x={i % 2 ? 760 : 220} y={190 + i * 108} w={i % 2 ? 620 : 520} h={78} tone={i % 2 ? 'accent' : 'panel'} r={24} anim="rise" i={i * 2} />
      ))}
      <Box x={220} y={850} w={1160} h={40} r={20} />
    </>
  ),
  code: () => (
    <>
      <Box x={130} y={180} w={1340} h={690} />
      {range(13).map((i) => (
        <Box key={i} x={180 + (i % 4) * 40} y={230 + i * 48} w={220 + ((i * 137) % 620)} h={18} tone={i % 5 === 0 ? 'accent' : 'soft'} r={6} anim="type" i={i} />
      ))}
    </>
  ),
  dashboard: () => (
    <>
      <Box x={130} y={180} w={260} h={690} />
      {range(7).map((i) => (
        <Box key={i} x={165} y={220 + i * 62} w={180} h={18} tone={i === 1 ? 'accent' : 'line'} r={6} />
      ))}
      {range(3).map((i) => (
        <g key={i}>
          <Box x={420 + i * 355} y={180} w={335} h={180} />
          <Box x={455 + i * 355} y={220} w={120} h={18} tone="soft" r={6} />
          <Box x={455 + i * 355} y={270} w={200} h={44} tone={i === 0 ? 'accent' : 'line'} anim="type" i={i * 3} />
        </g>
      ))}
      <Box x={420} y={390} w={1050} h={480} />
      {range(14).map((i) => {
        const h = 90 + ((i * 97) % 300);
        return <Box key={i} x={470 + i * 70} y={820 - h} w={38} h={h} tone={i === 9 ? 'accent' : 'line'} r={8} anim="grow" i={i} />;
      })}
    </>
  ),
  phone: () => (
    <>
      <Box x={620} y={150} w={360} h={740} r={46} />
      <Box x={660} y={220} w={280} h={200} tone="line" r={24} anim="blink" />
      {range(3).map((i) => (
        <Box key={i} x={660} y={450 + i * 90} w={280} h={70} tone="line" r={16} anim="rise" i={i * 2} />
      ))}
      <Box x={660} y={770} w={280} h={70} tone="accent" r={35} anim="pulse" />
    </>
  ),
  inbox: () => (
    <>
      <Box x={130} y={180} w={1340} h={690} />
      {range(9).map((i) => {
        const y = 230 + i * 72;
        return (
          <g key={i} className="il-a il-rise" style={{ animationDelay: `${(i * 0.16).toFixed(2)}s` }}>
            <circle cx={190} cy={y + 10} r={20} className="il-line" />
            <Box x={240} y={y} w={240} h={20} tone="soft" r={6} />
            <Box x={540} y={y} w={520} h={20} tone="line" r={6} />
            <Box x={1280} y={y - 6} w={140} h={32} tone={i < 2 ? 'accent' : 'line'} r={16} />
          </g>
        );
      })}
    </>
  ),
  agents: () => {
    const nodes = [
      [330, 280], [330, 500], [330, 720], [1270, 280], [1270, 500], [1270, 720],
    ] as const;
    return (
      <>
        {nodes.map(([x, y], i) => (
          <g key={`${x}-${y}`}>
            <path d={`M800 500C${(800 + x) / 2} 500 ${(800 + x) / 2} ${y} ${x} ${y}`} className="il-wire" />
            <path
              d={`M800 500C${(800 + x) / 2} 500 ${(800 + x) / 2} ${y} ${x} ${y}`}
              className="il-signal il-a il-flow"
              pathLength={100}
              style={{ animationDelay: `${(i * 0.35).toFixed(2)}s` }}
            />
            <Box x={x - 150} y={y - 60} w={300} h={120} r={24} />
            <Box x={x - 100} y={y - 10} w={200} h={20} tone="soft" r={8} />
          </g>
        ))}
        <circle cx={800} cy={500} r={120} className="il-panel" />
        <circle cx={800} cy={500} r={62} className="il-accent il-a il-pulse" />
      </>
    );
  },
  store: () => (
    <>
      <Box x={130} y={180} w={1340} h={150} />
      <Box x={180} y={235} w={320} h={40} tone="soft" />
      <Box x={1250} y={232} w={170} h={46} tone="accent" r={23} anim="pulse" />
      {range(4).map((i) => {
        const x = 130 + i * 340;
        return (
          <g key={i} className="il-a il-lift" style={{ animationDelay: `${(i * 0.35).toFixed(2)}s` }}>
            <Box x={x} y={360} w={320} h={510} />
            <Box x={x + 25} y={385} w={270} h={300} tone="line" />
            <Box x={x + 25} y={715} w={200} h={20} tone="soft" r={6} />
            <Box x={x + 25} y={760} w={100} h={20} tone="accent" r={6} />
          </g>
        );
      })}
    </>
  ),
};

interface IllustrationProps {
  readonly art: Art;
  readonly label: string;
}

export function Illustration({ art, label }: IllustrationProps) {
  return (
    <svg className="il" viewBox="80 80 1440 840" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label}>
      <rect x={80} y={80} width={1440} height={840} className="il-stage" />
      {range(3).map((i) => (
        <circle key={i} cx={130 + i * 34} cy={130} r={9} className="il-line" />
      ))}
      {scenes[art]()}
    </svg>
  );
}

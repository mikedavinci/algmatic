import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    revenue: 2400,
    date: '2024-01-01',
  },
  {
    revenue: 1398,
    date: '2024-01-02',
  },
  {
    revenue: 9800,
    date: '2024-01-03',
  },
  {
    revenue: 3908,
    date: '2024-01-04',
  },
  {
    revenue: 4800,
    date: '2024-01-05',
  },
  {
    revenue: 3800,
    date: '2024-01-06',
  },
  {
    revenue: 4300,
    date: '2024-01-07',
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Value
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[0].value}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Date
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[0].payload.date}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: 'hsl(var(--primary))', opacity: 0.8 },
          }}
          style={
            {
              stroke: 'hsl(var(--primary))',
              opacity: 0.8,
            } as React.CSSProperties
          }
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

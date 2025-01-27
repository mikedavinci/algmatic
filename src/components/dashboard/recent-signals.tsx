import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

export function RecentSignals() {
  const signals = [
    {
      market: 'BTC/USDT',
      type: 'LONG',
      entry: '47,891.20',
      timestamp: '2 mins ago',
      status: 'active',
    },
    {
      market: 'EUR/USD',
      type: 'SHORT',
      entry: '1.0923',
      timestamp: '5 mins ago',
      status: 'active',
    },
    {
      market: 'AAPL',
      type: 'LONG',
      entry: '185.92',
      timestamp: '15 mins ago',
      status: 'closed',
    },
    {
      market: 'ETH/USDT',
      type: 'LONG',
      entry: '2,391.45',
      timestamp: '30 mins ago',
      status: 'closed',
    },
    {
      market: 'GBP/USD',
      type: 'SHORT',
      entry: '1.2734',
      timestamp: '1 hour ago',
      status: 'closed',
    },
  ];

  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {signals.map((signal, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {signal.market}
              </p>
              <p className="text-sm text-muted-foreground">
                {signal.timestamp}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant={signal.type === 'LONG' ? 'default' : 'destructive'}
              >
                {signal.type}
              </Badge>
              <Badge
                variant={signal.status === 'active' ? 'secondary' : 'outline'}
              >
                {signal.entry}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

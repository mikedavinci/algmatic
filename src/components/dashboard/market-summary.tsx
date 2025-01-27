import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowUpRight,
  ArrowDownRight,
  Coins,
  DollarSign,
  LineChart,
} from 'lucide-react';

export function MarketSummary() {
  const markets = [
    {
      title: 'Crypto Market',
      icon: Coins,
      value: '$47,891.20',
      change: '+2.5%',
      trend: 'up',
      description: 'BTC Dominance: 42%',
    },
    {
      title: 'Forex Market',
      icon: DollarSign,
      value: '1.0923',
      change: '-0.3%',
      trend: 'down',
      description: 'EUR/USD',
    },
    {
      title: 'Stock Market',
      icon: LineChart,
      value: '4,783.45',
      change: '+1.2%',
      trend: 'up',
      description: 'S&P 500',
    },
  ];

  return (
    <>
      {markets.map((market, index) => {
        const Icon = market.icon;
        const TrendIcon = market.trend === 'up' ? ArrowUpRight : ArrowDownRight;
        const trendColor =
          market.trend === 'up' ? 'text-green-500' : 'text-red-500';

        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {market.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{market.value}</div>
                <Badge
                  variant="secondary"
                  className={`flex items-center gap-1 ${trendColor}`}
                >
                  <TrendIcon className="h-4 w-4" />
                  {market.change}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {market.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}

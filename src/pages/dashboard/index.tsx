// import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Overview } from '@/components/dashboard/overview';
import { RecentSignals } from '@/components/dashboard/recent-signals';
import { MarketSummary } from '@/components/dashboard/market-summary';

export function DashboardPage() {
  // const { t } = useTranslation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1">
        <main className="flex-1 p-6 pt-6">
          <div className="flex flex-col space-y-8">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <p className="text-muted-foreground">
                  Your trading overview and recent market activity
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button>Download Report</Button>
              </div>
            </div>

            {/* Market Summary Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <MarketSummary />
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="signals">Signals</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <Overview />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Recent Signals</CardTitle>
                      <CardDescription>
                        Your most recent trading signals across all markets
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSignals />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}

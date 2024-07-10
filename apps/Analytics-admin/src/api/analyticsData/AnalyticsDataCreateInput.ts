import { InputJsonValue } from "../../types";

export type AnalyticsDataCreateInput = {
  aggregateResults?: InputJsonValue;
  trendsAnalysis?: InputJsonValue;
  correlations?: InputJsonValue;
  userActivityData?: InputJsonValue;
  benchmarkingData?: InputJsonValue;
  performanceReviewData?: InputJsonValue;
  systemPerformanceData?: InputJsonValue;
};

import { InputJsonValue } from "../../types";

export type AnalyticsDataUpdateInput = {
  aggregateResults?: InputJsonValue;
  trendsAnalysis?: InputJsonValue;
  correlations?: InputJsonValue;
  userActivityData?: InputJsonValue;
  benchmarkingData?: InputJsonValue;
  performanceReviewData?: InputJsonValue;
  systemPerformanceData?: InputJsonValue;
};

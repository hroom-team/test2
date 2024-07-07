import { JsonValue } from "type-fest";

export type AnalyticsData = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  aggregateResults: JsonValue;
  trendsAnalysis: JsonValue;
  correlations: JsonValue;
  userActivityData: JsonValue;
  benchmarkingData: JsonValue;
  performanceReviewData: JsonValue;
  systemPerformanceData: JsonValue;
};

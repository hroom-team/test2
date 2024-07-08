import { SortOrder } from "../../util/SortOrder";

export type AnalyticsDataOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  aggregateResults?: SortOrder;
  trendsAnalysis?: SortOrder;
  correlations?: SortOrder;
  userActivityData?: SortOrder;
  benchmarkingData?: SortOrder;
  performanceReviewData?: SortOrder;
  systemPerformanceData?: SortOrder;
};

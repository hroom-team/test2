import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AnalyticsDataWhereInput = {
  id?: StringFilter;
  aggregateResults?: JsonFilter;
  trendsAnalysis?: JsonFilter;
  correlations?: JsonFilter;
  userActivityData?: JsonFilter;
  benchmarkingData?: JsonFilter;
  performanceReviewData?: JsonFilter;
  systemPerformanceData?: JsonFilter;
};

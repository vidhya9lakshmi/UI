import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeAgoPipe } from 'time-ago-pipe';
import { WidgetComponent } from './widget/widget.component';
import { TwoByTwoLayoutComponent } from './layouts/two-by-two-layout/two-by-two-layout.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { ChartDirective } from './charts/chart.directive';
import { ChartComponent } from './charts/chart/chart.component';
import { LayoutDirective } from './layouts/layout.directive';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { NgxChartsModule, LinearGaugeComponent } from '@swimlane/ngx-charts';
import { NumberCardChartComponent } from './charts/number-card-chart/number-card-chart.component';
import { LineAndBarChartComponent } from './charts/line-and-bar-chart/line-and-bar-chart.component';
import { ComboChartComponent } from './charts/combo-chart/combo-chart.component';
import { NgxUIModule } from '@swimlane/ngx-ui';
import { ComboSeriesVerticalComponent } from './charts/combo-series-vertical/combo-series-vertical.component';
import { ClickListComponent } from './charts/click-list/click-list.component';

@NgModule({
    declarations: [WidgetComponent, TwoByTwoLayoutComponent, LayoutComponent, ChartDirective,
        ChartComponent, LayoutDirective, LineChartComponent, NumberCardChartComponent,
        LineAndBarChartComponent, ComboChartComponent, ComboSeriesVerticalComponent, ClickListComponent,
        TimeAgoPipe],
    entryComponents: [TwoByTwoLayoutComponent, LineChartComponent, NumberCardChartComponent, 
        LineAndBarChartComponent, ComboChartComponent, ClickListComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxChartsModule,
        NgxUIModule
    ],
    exports: [
        ReactiveFormsModule,
        CommonModule,
        TwoByTwoLayoutComponent,
        LayoutComponent,
        WidgetComponent,
        LineChartComponent,
        NumberCardChartComponent,
        ComboChartComponent,
        LineAndBarChartComponent,
        ComboSeriesVerticalComponent,
        ChartComponent,
        LayoutDirective,
        ChartDirective
    ]
})
export class SharedModule { }

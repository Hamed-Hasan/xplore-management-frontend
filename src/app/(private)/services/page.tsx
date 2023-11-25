"use client";

import AvailableService from "@/components/Services/AvailableService";
import ServiceDate from "@/components/Services/ServiceDate";
import ServiceFilter from "@/components/Services/ServiceFilter/ServiceFilter";
import ServiceNameFilter from "@/components/Services/ServiceNameFilter";
import ServicePriceHighToLow from "@/components/Services/ServicePriceHighToLow";
import ServicesPriceLowToHigh from "@/components/Services/ServicesPriceLowToHigh";
import UpcomingService from "@/components/Services/UpcomingService";
import DraggableTabNode from "@/components/UI/DraggableTabNode";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { Tabs } from "antd";
import { useState } from "react";

const Services = () => {
  const [items, setItems] = useState([
    {
      key: "all-services",
      label: "All Services",
      children: <ServiceDate />,
    },
    {
      key: "available-service",
      label: "Available Service",
      children: <AvailableService />,
    },
    {
      key: "upcoming-service",
      label: "Upcoming Service",
      children: <UpcomingService />,
    },
    {
      key: "priceLow",
      label: "Price Low To High",
      children: <ServicesPriceLowToHigh />,
    },
    {
      key: "priceHigh",
      label: "Price High To Low",
      children: <ServicePriceHighToLow />,
    },
    {
      key: "name",
      label: "Name < a - z >",
      children: <ServiceNameFilter />,
    },
  ]);

  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  return (
    <div className="container mx-auto mt-10 overflow-x-hidden">
      <div className="flex justify-between flex-col-reverse lg:flex-row gap-10">
        <div className="lg:w-9/12 mx-auto">
          <Tabs
            type="card"
            animated
            tabBarStyle={{
              display: "flex",
              flexWrap: "wrap",
            }}
            items={items}
            renderTabBar={(tabBarProps, DefaultTabBar) => (
              <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
                <SortableContext
                  items={items.map((i) => i.key)}
                  strategy={horizontalListSortingStrategy}
                >
                  <DefaultTabBar {...tabBarProps}>
                    {(node) => (
                      <DraggableTabNode {...node.props} key={node.key}>
                        {node}
                      </DraggableTabNode>
                    )}
                  </DefaultTabBar>
                </SortableContext>
              </DndContext>
            )}
          />
        </div>
        <div className="lg:w-3/12">
          <ServiceFilter />
        </div>
      </div>
    </div>
  );
};

export default Services;

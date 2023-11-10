import moment from "moment";

type WeekIndicatorProps = {
  className?: string;
};

const WeekIndicator = ({ className }: WeekIndicatorProps) => {
  return (
    <div className="flex items-center gap-1">
      {moment.weekdays().map((day) => (
        <div
          className={`flex flex-col items-center justify-center text-xs font-medium uppercase ${className}`}
          key={day}
        >
          <span>{moment().day(day).format("DD")}</span>
          <span>{moment().day(day).format("ddd")}</span>
        </div>
      ))}
    </div>
  );
};

export default WeekIndicator;

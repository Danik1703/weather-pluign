export interface WeatherData {
  wind: {
    speed: number;
  };
  city: {
    name: string;
    country: string;
  };
  main: {
    humidity: number;
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  list?: {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  }[];
}
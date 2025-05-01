export interface WeatherData {
  wind: {
    speed: number;
  };
  main: {
    humidity: number;
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  city?: { 
    name: string;
    country: string;
  };
  sys?: { 
    country: string;
  };
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

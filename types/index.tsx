type RootStackParamList = {
  RecipeSelector: undefined;
  RecipeDetail: { recipe: RecipeType };
  RecipeSteps: { recipe: RecipeType };
};

type RecipeType = {
  title: string;
  tags: string[];
  tools: string[];
  ingredients: {
    item: string;
    quantity: number;
    measurement: string;
  }[];
  instructions: string[];
  imageURL: string;
};

type Measurements = {
  [key: string]: {
    plural: string | null;
  };
}

export type { RootStackParamList, RecipeType, Measurements };

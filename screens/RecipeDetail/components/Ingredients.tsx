import KBSpacer from "@/components/KBSpacer";
import KBTypography from "@/components/KBTypography";
import { View } from "react-native";

interface Ingredient {
    item: string;
    amount: number;
    measurement: string;
    }

export default function IngredientsComponent() {
  const test_ingredients: Ingredient[] = [
    {
        item: "Flour",
        amount: 1,
        measurement: "cup",
    },
    {
        item: "Sugar",
        amount: 1,
        measurement: "cup",
    },
    {
        item: "Milk",
        amount: 1,
        measurement: "cup",
    },
  ];
  return (
    <>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <KBTypography variant="header">Ingredients</KBTypography>
        <KBTypography>{test_ingredients.length} {test_ingredients.length <= 1 ? 'item' : 'items'}</KBTypography>
      </View>

      <KBSpacer size={16} />

      <View
        style={{
        }}
      >
        {test_ingredients.map((ingredient) => (
          <>
            <IngredientComponent key={ingredient.item} ingredient={ingredient} />
            <KBSpacer orientation="horizontal" size={8} />
          </>
        ))}
      </View>
    </>
  );
}

interface IngredientComponentProps {
    ingredient: Ingredient;
    }

function IngredientComponent({
  ingredient,
}: Readonly<IngredientComponentProps>) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <KBTypography>{ingredient.item}</KBTypography>
      <KBTypography>{ingredient.amount} {ingredient.measurement}</KBTypography>
    </View>
  );
}

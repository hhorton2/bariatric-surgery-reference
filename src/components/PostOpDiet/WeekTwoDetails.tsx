import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function WeekTwoDetails(): JSX.Element {
  return (
      <>
        <Typography variant={"h6"}>Add Pureed Foods</Typography>
        <Typography variant={"subtitle1"}>
          <span style={{fontWeight: "bold"}}>Goal: </span>
          Allow the new stomach anatomy to adjust
        </Typography>
        <Typography variant={"subtitle1"}>
          <span style={{fontWeight: "bold"}}> Guidelines: </span>
        </Typography>
        <Typography variant={"body1"}>
          <ul>
            <li>
              Eat only 6 meals per day. You may continue a protein supplement 1-2
              times a day
            </li>
            <li>
              You may progress to 2-4 ounces (4-8 Tbsp.) of pureed food per
              feeding.
            </li>
            <li>Avoid all foods that require chewing.</li>
            <li>
              Eat your protein food or dairy food first, followed by a fruit or
              vegetable.
            </li>
            <li>
              Between meals, sip on non-carbonated, calorie-free, caffeine-free
              liquids; 4-6 oz. at a time.
            </li>
            <li>
              Stop drinking liquids 30 minutes before and after mealtimes to allow
              stomach to empty.
            </li>
            <li>
              Eat or drink less than the suggested amounts or stop eating/drinking
              if you begin to feel discomfort.
            </li>
            <li>
              By now you should start your vitamin/mineral supplements, add your
              calcium supplement.
            </li>
            <li>
              You are to take in at least 60 grams of protein and at least 64
              ounces of fluids throughout the day.
            </li>
          </ul>
        </Typography>
        <hr/>
        <br/>
        <TableContainer component={Paper}>
          <Table size={"small"} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Food Category</TableCell>
                <TableCell>Foods Recommended</TableCell>
                <TableCell>Foods NOT Recommended</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell>Soups</TableCell>
                <TableCell>
                  <ul>
                    <li>Egg drop soup</li>
                    <li>Reduced-fat cream soups</li>
                    <li>Broth</li>
                    <li>Bouillon</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>Regular cream soups</li>
                    <li>Soups with whole meats and vegetables</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell>Breads/ starches</TableCell>
                <TableCell>
                  <ul>
                    <li>Cooked, refined/strained cereals</li>
                    <li>Mashed potatoes without skin</li>
                    <li>Grits</li>
                    <li>Plain oatmeal</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>Bread</li>
                    <li>Rice</li>
                    <li>Pasta</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell>Vegetables</TableCell>
                <TableCell>
                  <ul>
                    <li>Pureed/mashed vegetables</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>Whole vegetables</li>
                    <li>Raw vegetables</li>
                    <li>Vegetables with seeds or hulls</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell>Fruits</TableCell>
                <TableCell>
                  <ul>
                    <li>Unsweetened applesauce</li>
                    <li>Pureed or mashed "lite" or juice-packed canned fruits</li>
                    <li>Pureed or mashed banana</li>
                    <li>Other pureed fruit without seeds or hulls</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>Sugar sweetened fruit</li>
                    <li>Fruit packed in heavy syrup</li>
                    <li>Raw fruit</li>
                    <li>Fruit skins, seeds, or hulls</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell>Meat/Protein/Protein Substitutes</TableCell>
                <TableCell>
                  <ul>
                    <li>Pureed/mashed skinless chicken or fish</li>
                    <li>Low-fat cottage cheese</li>
                    <li>Mashed or pureed tofu</li>
                    <li>Pureed or mashed egg or egg substitute</li>
                    <li>Chicken salad or tuna salad in food processor</li>
                    <li>Smoothies with protein</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>Regular whole meats</li>
                    <li>Fried meats</li>
                    <li>Fried eggs</li>
                    <li>Whole milk cottage cheese</li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br/>
        <Typography variant={"subtitle1"}>
          Using a food processor or blender, food may be blended with liquid.
          Fruits, vegetables, meats, casseroles, and cereals from the table can be
          used.
        </Typography>
        <br/>
        <Typography variant={"subtitle1"}>
          Liquids that may be added to foods to get them to a pureed form:
        </Typography>
        <Typography variant={"body1"}>
          <ul>
            <li>Broth</li>
            <li>Low-fat creamed soup</li>
            <li>Skim milk</li>
            <li>Low-fat thin gravies</li>
            <li>
              Salt, flavoring extracts, and some spices may be added for flavor,
              as tolerated
            </li>
          </ul>
        </Typography>
        <hr/>
        <Typography variant={"subtitle1"}>Hints for blending foods:</Typography>
        <Typography variant={"body1"}>
          <ul>
            <li>Warm meats, vegetables, or potatoes before blending</li>
            <li>Chop meat finely before blending</li>
            <li>
              Use blended or strained meat and blend with gravy or cream soups
            </li>
            <li>Blend vegetables with cream soups</li>
            <li>
              Blend fruits with light cottage cheese, add fruit juice if needed to
              be thin
            </li>
            <li>
              Well-cooked green beans, carrots, peas can be mashed and do not have
              to be pureed/blended.
            </li>
            <li>
              Low fat ricotta cheese with low sugar marinara sauce heats up in a
              microwave or oven for a "lasagna" taste.
            </li>
            <li>
              You can get a lot of protein and nutrients from making your own
              pureed foods. Boil your meats and/or vegetables in chicken stock.
              You may use seasonings. Use a food processor for best results. Be
              Creative! Chicken and butternut squash, banana and avocado, roast
              beef and carrots or sweet potatoes.
            </li>
          </ul>
        </Typography>
        <hr/>
        <Typography variant={"h6"}>Puree Phase Sample Menu</Typography>
        <br/>
        <TableContainer component={Paper}>
          <Table size={"small"} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Meal</TableCell>
                <TableCell>Regular</TableCell>
                <TableCell>Lactose Free</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell>Breakfast</TableCell>
                <TableCell>
                  <ul>
                    <li>2 Tbsp. mashed soft scrambled egg</li>
                    <li>2 Tbsp. oatmeal + 4 Tbsp. HIGH PROTEIN MILK</li>
                    <li>1 tsp. butter</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>1 mashed soft scrambled egg</li>
                    <li>2 Tbsp. oatmeal made with water or soy milk,</li>
                    <li>1 tsp. butter</li>
                    <li>2 Tbsp. mashed "lite" or juice-packed fruit</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell>Mid-Morning Snack</TableCell>
                <TableCell>
                  <Typography variant={"body2"}>
                    High Protein Shake: Blend
                  </Typography>
                  <ul>
                    <li>1 packet No Sugar Added Instant Breakfast drink mix</li>
                    <li>8 oz. HIGH PROTEIN MILK.</li>
                    <li>1 small frozen banana</li>
                  </ul>
                  <Typography variant={"body2"} sx={{fontWeight: "bold"}}>
                    Consume in 2-4 portions of 2-4 oz.
                  </Typography>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>8 oz. Commercial Protein Shake</li>
                    <li>1 oz. Commercial Liquid Protein Concentrate</li>
                  </ul>
                  <Typography variant={"body2"} sx={{fontWeight: "bold"}}>
                    Consume in 2-4 portions of 2-4 oz.
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell>Lunch</TableCell>
                <TableCell>
                  <ul>
                    <li>¼ cup mashed reduced-fat cottage cheese</li>
                    <li>¼ cup mashed "lite" or juice-packed fruit</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>¼ cup mashed canned chicken</li>
                    <li>2 Tbsp. cream potatoes</li>
                    <li>1 tsp. butter</li>
                    <li>2 Tbsp. mashed "lite" or juice packed fruit</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell>Mid-Afternoon Snack</TableCell>
                <TableCell>
                  <ul>
                    <li>
                      1 cup HIGH PROTEIN PUDDING (use recipe from mid morning
                      snack)
                    </li>
                  </ul>
                  <Typography variant={"body2"} sx={{fontWeight: "bold"}}>
                    Consume in 2 portions of 4 oz.
                  </Typography>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>8 oz. Commercial Protein Shake</li>
                  </ul>
                  <Typography variant={"body2"} sx={{fontWeight: "bold"}}>
                    Consume in 2 portions of 4 oz.
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell>Dinner</TableCell>
                <TableCell>
                  <ul>
                    <li>¼ cup flavored tuna mashed with 1 tsp. mayo</li>
                    <li>2 Tbsp. mashed green beans with 1 tsp butter</li>
                    <li>2 Tbsp. applesauce</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>¼ cup flavored tuna mashed with 1 tsp. mayo</li>
                    <li>2 Tbsp. mashed green beans with ½ tsp butter</li>
                    <li>2 Tbsp. applesauce</li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
  );
}

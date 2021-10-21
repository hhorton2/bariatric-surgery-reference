import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,} from "@mui/material";

export default function WeekOneDetails(): JSX.Element {
  return (
      <>
        <Typography variant={"h6"}>Full Liquids</Typography>
        <Typography variant={"subtitle1"}>
          <span style={{fontWeight: "bold"}}>Goal:</span> Protect the small
          stomach pouch,{" "}
          <span style={{background: "yellow"}}>STAY HYDRATED</span>
        </Typography>
        <Typography variant={"subtitle1"}>
          <span style={{fontWeight: "bold"}}> Guidelines: </span>
        </Typography>
        <Typography variant={"subtitle1"}>
          When you go home from the hospital, your first priority is to drink
          enough fluid to prevent dehydration. Remember that protein drinks count
          as liquids.
        </Typography>
        <Typography variant={"body1"}>
          <ul>
            <li>
              Start with 1-2 oz. per feeding & progress to 4 oz. per meal by the
              2nd week, as tolerated.
            </li>
            <li>
              Gradually increase protein intake, as tolerated, to a goal of 60-80
              grams daily. You may include a Protein supplement 1-2 times a day
              during this phase of your diet.
            </li>
            <li>
              Between meals, sip on non-carbonated, calorie-free, caffeine-free
              liquids; 2-3 oz. at a time.
            </li>
            <li>
              Combining all liquids, you should aim for a minimum of 64 oz. (8
              cups) fluid daily.
            </li>
            <li>
              Consume at least 60 grams protein and 64 ounces of liquids every 24
              hours
            </li>
          </ul>
        </Typography>
        <Typography variant={"subtitle1"}>
          It is not uncommon to feel a sensation of fullness from liquids after
          surgery. This may limit your ability or desire to take the goal volumes
          in the first several days after surgery. As you progress, you should
          find it easier to meet the daily goals. For best tolerance, do not use
          straws, take small sips, and start with room temperature liquids.
        </Typography>
        <br/>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
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
                <TableCell>Thin clear & full liquids </TableCell>
                <TableCell>
                  <ul>
                    <li>Fat-free milk</li>
                    <li>unsweetened almond milk</li>
                    <li>soy milk</li>
                    <li>no sugar added fruit icies & popsicles</li>
                    <li>
                      sugar-free low-fat puddings low fat yogurt (no fruit pieces)
                    </li>
                    <li>
                      sugar free Jell-O Protein water/shakes vegetable juice
                    </li>
                    <li>
                      Unsweetened fruit juices (limit fruit juice to 4 ounces per
                      day)
                    </li>
                    <li>
                      Crystal Light or equivalent/Propel water with lemon or lime
                      juice
                    </li>
                    <li>
                      Chicken/Beef broth, Bone Broth, strained cream-based soups
                      (protein powder may be added to soups to increase protein).
                    </li>
                    <li>
                      Runny Cream of wheat/creamed potatoes/runny grits (must be
                      so thin they will run off the spoon)
                    </li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>Sugar-sweetened liquids</li>
                    <li>whole milk</li>
                    <li>sweetened condensed milk</li>
                    <li>chocolate milk made with added sugar</li>
                    <li>carbonated beverages</li>
                    <li>sugar-sweetened popsicles or fruit ices</li>
                    <li>milkshakes</li>
                    <li>sugar-sweetened fruit smoothies</li>
                    <li>ice cream</li>
                    <li>sherbet</li>
                    <li>frozen yogurt</li>
                    <li>alcohol</li>
                    <li>spicy drinks</li>
                    <li>caffeine</li>
                    .
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
  );
}

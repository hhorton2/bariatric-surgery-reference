import {Grid, TextField, Typography} from "@mui/material";
import {ChangeEvent, useMemo, useState} from "react";

export default function BmiCalculator(): JSX.Element {
  const [heightInFeet, setHeightInFeet] = useState<number | null>(null);
  const [heightInInches, setHeightInInches] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);

  const totalInches = useMemo(
      () => (heightInFeet ?? 0) * 12 + (heightInInches ?? 0),
      [heightInFeet, heightInInches]
  );
  const bmi = useMemo(() => {
    const temp =
        (numberOrOne(weight) /
            (numberOrOne(totalInches) * numberOrOne(totalInches))) *
        703;
    if (numberOrOne(temp) === 1) {
      return 0;
    }
    return Math.round(temp);
  }, [totalInches, weight]);
  const bmiCategory = useMemo(() => {
    if (bmi <= 17) {
      return "Severely Underweight";
    }
    if (bmi <= 19) {
      return "Underweight";
    }
    if (bmi < 25) {
      return "Normal";
    }
    if (bmi < 30) {
      return "Overweight";
    }
    if (bmi < 35) {
      return "Obesity class I";
    }
    if (bmi < 40) {
      return "Obesity class II";
    }
    return "Obesity class III";
  }, [bmi]);

  function handleChangeInFeet(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setHeightInFeet(!Number.isNaN(value) ? value : null);
  }

  function handleChangeInInches(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setHeightInInches(!Number.isNaN(value) ? value : null);
  }

  function handleChangeInWeight(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setWeight(!Number.isNaN(value) ? value : null);
  }

  function numberOrOne(input: any): number {
    const value = parseInt(input);
    if (Number.isNaN(value) || !Number.isFinite(input)) {
      return 1;
    }
    return value;
  }

  return (
      <>
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{marginTop: 2}}
        >
          <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
              xs={12}
          >
            <TextField
                label={"Height (ft.)"}
                inputProps={{inputMode: "numeric", pattern: "[0-9]*"}}
                sx={{margin: 1}}
                value={heightInFeet}
                onChange={handleChangeInFeet}
                placeholder={"6'"}
            />

            <TextField
                label={"Height (in.)"}
                inputProps={{inputMode: "numeric", pattern: "[0-9]*"}}
                sx={{margin: 1}}
                value={heightInInches}
                onChange={handleChangeInInches}
                placeholder={'2"'}
            />
          </Grid>
          <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
              xs={12}
          >
            <TextField
                label={"Weight (lbs.)"}
                inputProps={{inputMode: "numeric", pattern: "[0-9]*"}}
                sx={{margin: 1}}
                value={weight}
                onChange={handleChangeInWeight}
                placeholder={"250 lbs."}
            />
          </Grid>
          <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
              xs={12}
          >
            <Typography variant={"h1"}>{bmi}</Typography>
          </Grid>
          <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
              xs={12}
          >
            <Typography variant={"subtitle1"}>{bmiCategory}</Typography>
          </Grid>
        </Grid>
      </>
  );
}

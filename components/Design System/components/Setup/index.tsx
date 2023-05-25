'use client';

interface ISetup {
  config?: {
    normalize?: boolean;
  };
}

export default async function Setup(props: ISetup) {
  const { config } = props;

  if (config?.normalize) {
    console.log('LOL');
    // Load Normalize.css
  }
  return <></>;
}

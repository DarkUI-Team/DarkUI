import { Button } from '@/components/Design System';
import styles from './page.module.css';
import DynamicComponent from '@/components/Design System/components/DynamicComponentProps';
import Link from 'next/link';
import Image from 'next/image';
import Input from '@/components/Design System/components/Input/Input';

// Button;
//  ^?
// Button.group;
//      ^?

export default function Home() {
  return (
    <main className={styles.main}>
      <Button color="success"></Button>
      <Button.Group color="success">
        <Button>1</Button>
        <Button></Button>
        <Button>3</Button>
      </Button.Group>
    </main>
  );
}

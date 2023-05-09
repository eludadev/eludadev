import clsx from 'clsx';

import styles from './MenuIcon.module.css';

export default function MenuIcon({
  isToggled,
}: {
  isToggled?: boolean;
}): JSX.Element {
  return (
    <div
      className={clsx(
        'relative w-[30px] h-[30px]',
        isToggled && styles.MenuClose,
      )}
    >
      <span className={clsx(styles.MenuLines, styles.MenuLine1)}></span>
      <span className={clsx(styles.MenuLines, styles.MenuLine2)}></span>
      <span className={clsx(styles.MenuLines, styles.MenuLine3)}></span>
    </div>
  );
}

import { usePrograms } from '@src/app/common/recoil/programs';
import { ComponentType, ReactNode, useEffect } from 'react';

interface ProgramProps {
  id: string;
  name: string;
  component?: ComponentType;
  children?: ReactNode;
}

const Program = (props: ProgramProps) => {
  const { register } = usePrograms();

  useEffect(() => {
    const unregister = register({
      id: props.id,
      name: props.name,
      Component() {
        if (props.component) {
          return <props.component />;
        } else {
          return <>{props.children}</>;
        }
      },
    });

    return () => {
      unregister();
    };
  }, [props.id, props.component]);

  return null;
};

export default Program;

const getTranslate = (style: CSSStyleDeclaration) => {
  const matrix = style.transform;

  const matrixValues = matrix.match(/matrix.*\((.+)\)/)?.[1].split(', ');

  const currX = Number(matrixValues?.[4] ?? '0');
  const currY = Number(matrixValues?.[5] ?? '0');

  return { currX, currY };
};
export default getTranslate;

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  declare module '*.scss'; // 일반 scss import용
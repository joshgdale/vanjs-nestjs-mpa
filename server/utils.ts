interface RenderPage {
  title?: string;
  data?: any;
  components?: string[];
  debugData?: boolean;
}

export function renderPage(props: RenderPage) {
  return {
    title: props.title ?? 'TITLE',
    data: props.data ?? {},
    components: props.components ?? [],
    debugData: props.debugData,
  };
}

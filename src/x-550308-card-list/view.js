import '@servicenow/now-template-card';

export default (state, { updateState }) => {
  return (
    <ul className="container">
      {state.mockData.map(listItem => {
        const {
          tagline,
          actions,
          heading,
          configAria,
          content,
          contentItemMinWidth,
          footerContent,
        } = listItem;

        return (
          <li className="list-item">
            <now-template-card-assist
              tagline={tagline}
              actions={actions}
              heading={heading}
              content={content}
              contentItemMinWidth={contentItemMinWidth}
              footerContent={footerContent}
              configAria={configAria}
            />
          </li>
        );
      })}
    </ul>
  );
};

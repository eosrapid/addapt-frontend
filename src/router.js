    
import React from 'react';
import { Router, Route } from 'dva/router';
import HomePage from '@/pages/Home';
import EditorLayout from '@/layouts/EditorLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <EditorLayout>
          <Route path="/" component={HomePage} />
        </EditorLayout>
    </Router>
  );
}

export default RouterConfig;
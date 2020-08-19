import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { CHAT_VIEW_STATUS } from '../../constant/ChatViewStatus';
import HomeMain from './home/HomeMain';
import FeedMain from './feed/FeedMain';
import GroupMain from './group/GroupMain';
import MyPageMain from './myPage/MyPageMain';
import InputNewGroupNameView from './home/components/creation/InputNewGroupNameView';
import InputNewGroupInterestsView from './home/components/creation/InputNewGroupInterestsView';
import InputNewGroupMoreInfoView from './home/components/creation/InputNewGroupMoreInfoView';
import InputNewGroupLocationView from './home/components/creation/InputNewGroupLocationView';
import InputNewGroupDescriptionView from './home/components/creation/InputNewGroupDescriptionView';
import Preview from './home/components/creation/Preview';

const HomeStack = createStackNavigator();
const GroupStack = createStackNavigator();
const FeedStack = createStackNavigator();
const MyPageStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeMain} />
      <HomeStack.Screen name="InputNewGroupName" component={InputNewGroupNameView} />
      <HomeStack.Screen name="InputNewGroupInterests" component={InputNewGroupInterestsView} />
      <HomeStack.Screen name="InputNewGroupMoreInfo" component={InputNewGroupMoreInfoView} />
      <HomeStack.Screen name="InputNewGroupLocation" component={InputNewGroupLocationView} />
      <HomeStack.Screen name="InputNewGroupDescription" component={InputNewGroupDescriptionView} />
      <HomeStack.Screen name="Preview" component={Preview} />
    </HomeStack.Navigator>
  );
};

const GroupStackScreen = () => {
  return (
    <GroupStack.Navigator>
      <GroupStack.Screen name="Home" component={GroupMain} />
    </GroupStack.Navigator>
  );
};

const FeedStackScreen = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Home" component={FeedMain} />
    </FeedStack.Navigator>
  );
};

const MyPageScreen = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="Home" component={MyPageMain} />
    </MyPageStack.Navigator>
  );
};

@inject('mainStore')
@observer
class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Group" component={GroupStackScreen} />
          <Tab.Screen name="Feed" component={FeedStackScreen} />
          <Tab.Screen name="MyPage" component={MyPageScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Main;

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Typography from './Typography';

const AuthorSection = ({
  style,
  imageSource,
  title,
  subTitle,
  fixed,
  optionalComponent,
  reverseColor,
}) => (
  <View style={[styles.container, fixed && styles.fixed, style]}>
    <View style={styles.authorFullSpace}>
      <Image source={{ uri: imageSource }} style={styles.authorAvatar} />
      <View style={styles.authorInfo}>
        <Typography h5 style={reverseColor && styles.titleWhite}>{title}</Typography>
        <Typography p muted>
          {subTitle}
        </Typography>
      </View>
    </View>
    {optionalComponent && <View style={{ flex: 2 }}>{optionalComponent}</View>}
  </View>
);

AuthorSection.propTypes = {
  style: PropTypes.any,
  imageSource: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  fixed: PropTypes.bool,
  optionalComponent: PropTypes.any,
  reverseColor: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    marginBottom: 5,
    marginTop: 5,
    // flex: 1,
    backgroundColor: 'transparent',
  },
  fixed: {
    borderRadius: 6,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  authorFullSpace: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  authorInfo: {
    marginLeft: 15,
  },
  titleWhite: {
    color: 'rgb(255,255,255)'
  },
  fixed: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    right: 20,
    shadowColor: '#F2F2F2',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 5,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 5,
    elevation: 1,
  }
});

export default AuthorSection;